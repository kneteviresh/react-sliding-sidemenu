import React, { Component } from 'react';
import './styles/sidebar.scss';
import SidebarHeader from './SidebarHeader.jsx';
import SidebarLinks from './SidebarLinks.jsx';
import SidebarDescription from './sidebarDescription.jsx';
import SidebarProfile from './SidebarProfile.jsx';
import SidebarFooter from './SidebarFooter.jsx';
import defaultPic from './profilePic.jpg';


class Sidebar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSidebarVisible: false
        }
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    static defaultProps = {
        top: 0,
        fontSize: 25,
        textColor: 'black',
        fontStyle: 'sans-serif', //'Arial, Helvetica, sans-serif',
        profileVisible: true,
        ProfileName: 'Veeresh Nete',
        hasReactRouterLinks: false,
        descriptionVisible: true,
        expandIconStyle: 'menu-hamburger',
        sidebarTitle: 'React sliding sidebar',
        descriptionContent: <p>
            <b>click to expand profile image</b> <br />
            React-sliding-sidemenu is a fully customisable, responsive overlay side menu sliding from left.
            this is the description field which will be user passed free text or DOM element.
            Side menu has following sections
            <ul>
                <li>Header</li>
                <li>Profile</li>
                <li>Description</li>
                <li>Quick Links</li>
            </ul>
        </p>,
        orderOfContents: {
            profile: 1,
            description: 2,
            links: 3
        },
        profileImage: defaultPic,
        dataForLinks:
        [
            {
                mainLink: "Main Link 1",
                href: "www.google.com",
                subLinks: [
                    {
                        subLink: "Sub Link 1",
                        href: "www.google.com",
                        childLinks: [
                            {
                                childLink: 'Child Link 1',
                                href: 'www.google.com'
                            },
                            {
                                childLink: 'Child Link 2',
                                href: 'www.google.com'
                            }
                        ]
                    },
                    {
                        subLink: "Sub Link 2",
                        href: "www.google.com",
                        childLinks: []
                    },
                    {
                        subLink: "SubLink 3",
                        href: "www.google.com",
                        childLinks: []
                    }
                ]
            },
            {
                mainLink: "Main Link 2",
                href: "www.google.com",
                subLinks: [
                    {
                        subLink: "Sub Link 1",
                        href: "www.google.com",
                        childLinks: []
                    },
                    {
                        subLink: "Sub Link 2",
                        href: "www.google.com",
                        childLinks: []
                    },
                    {
                        subLink: "Sub Link 3",
                        href: "www.google.com",
                        childLinks: []
                    }
                ]
            },
            {
                mainLink: "Main Link 3",
                href: "www.google.com",
                subLinks: []
            }
        ]


    }

    toggleSidebar() {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    }

    validateOrderOfContent(orderOfContent) {
        var arr = [orderOfContent.profile, orderOfContent.description, orderOfContent.links]
        var valid = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0 && arr[i] < 4) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] == arr[j])
                        valid = false;
                    break;
                }
            }
            else {
                valid = false
                break;
            }
        }
        return valid;

    }


    render() {
        var { top, fontSize, fontStyle, profileVisible, profilePic,
            ProfileName, hasReactRouterLinks, hasContentToshow, expandIconStyle,
            sidebarTitle, descriptionContent, orderOfContents,
            profileImage, dataForLinks, onLinkItemClick, descriptionVisible
            , textColor } = this.props;

        const sidebarHeaderProps = {
            fontSize: fontSize,
            fontStyle: fontStyle,
            sidebarTitle: sidebarTitle,
            textColor:textColor
        };

        const sidebarContentProps = {
            fontSize: fontSize,
            fontStyle: fontStyle,
            descriptionContent: descriptionContent,
            descriptionVisible: descriptionVisible,
            textColor:textColor
        }

        const SidebarProfileProps = {
            fontSize: fontSize,
            fontStyle: fontStyle,
            profileVisible: profileVisible,
            ProfileName: ProfileName,
            profileImage: profileImage,
            textColor:textColor
        }


        const sidebarLinksProps = {
            hasReactRouterLinks: hasReactRouterLinks,
            fontSize: fontSize,
            fontStyle: fontStyle,
            dataForLinks: dataForLinks,
            onLinkItemClick: onLinkItemClick,
            textColor:textColor
        }

        var validOrder = this.validateOrderOfContent(orderOfContents)
        if (!validOrder) {
            orderOfContents = {
                profile: 1,
                description: 2,
                links: 3
            }
        }
        var expandButtonTop = top + 10;
        var heightOfSidebar = 100 - ((top * 100) / window.innerHeight);
        return (
            <div>
                <div style={{ 'top': expandButtonTop + 'px' }} className={`expandIcon ${(!this.state.isSidebarVisible) && 'show'}`}>
                    <a href="#" onClick={this.toggleSidebar}>
                        <span className={`glyphicon glyphicon-${expandIconStyle}`}></span>
                    </a>
                </div>
                <div style={{ 'top': top + 'px', 'height': heightOfSidebar + '%' }} className={`sidebarMenu ${(this.state.isSidebarVisible) && 'show'}`} >
                    <SidebarHeader sidebarHeaderProps={sidebarHeaderProps} closeSidebar={this.toggleSidebar} >
                    </SidebarHeader>

                    {orderOfContents.profile == 1 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 1 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
                            </SidebarLinks>}

                    {orderOfContents.profile == 2 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 2 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
                            </SidebarLinks>}

                    {orderOfContents.profile == 3 ? <SidebarProfile SidebarProfileProps={SidebarProfileProps}></SidebarProfile> :
                        orderOfContents.description == 3 ? <SidebarDescription sidebarContentProps={sidebarContentProps}>
                        </SidebarDescription> :
                            <SidebarLinks sidebarLinksProps={sidebarLinksProps}>
                            </SidebarLinks>}


                    {/* 
                    <SidebarProfile SidebarProfileProps={SidebarProfileProps}><hr /></SidebarProfile>

                    <SidebarLinks hasReactRouterLinks={hasReactRouterLinks} fontSize={fontSize} dataForLinks={this.props.dataForLinks}><hr />
                    </SidebarLinks>

                    <SidebarDescription sidebarContentProps={sidebarContentProps}><hr />
                    </SidebarDescription> */}

                    <SidebarFooter font={fontSize} />
                </div>
            </div>


        )

    }
}

export default Sidebar;