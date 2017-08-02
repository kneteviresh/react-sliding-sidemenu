import React, { Component } from 'react';
import './styles/sidebarLinks.scss';
import { Link } from 'react-router-dom';
import expandIcon from './icons/plusIcon.png';

class SidebarLinks extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            firstChildSublink: [],
            secondChildSublinks: []
        }
        this.getlinks = this.getlinks.bind(this);
        this.getSubLinks = this.getSubLinks.bind(this);
        this.expandSubMenu = this.expandSubMenu.bind(this);
        this.expandChildMenu = this.expandChildMenu.bind(this);
    }

    handleMainLinkClick(clickedLink, e) {
        if (this.props.sidebarLinksProps.onLinkItemClick)
            this.props.sidebarLinksProps.onLinkItemClick(clickedLink)
        return true;
    }

    expandSubMenu(index) {
        var selectedSubMenu = this.state.firstChildSublink;
        if (selectedSubMenu[index] == true) {
            selectedSubMenu[index] = false;
        }
        else {
            selectedSubMenu[index] = true;
        }

        this.setState({
            firstChildSublink: selectedSubMenu
        });
    }

    expandChildMenu(index) {
        var selectedChildMenu = this.state.secondChildSublinks;
        if (selectedChildMenu[index] == true) {
            selectedChildMenu[index] = false
        }
        else {
            selectedChildMenu[index] = true;
        }

        this.setState({
            secondChildSublinks: selectedChildMenu
        })
    }

    getChildLinks(childLinkItems, key) {
        const childLinks = childLinkItems;
        var childListItems;
        if (childLinks.length == 0) return;
        else {
            childListItems = childLinks.map((childLink, key) =>
                <li className="sidebarLink-childListItem" key={key}>
                    <div style={{
                        'fontSize': (this.props.sidebarLinksProps.fontSize - 5) + 'px',
                        'fontFamily': this.props.sidebarLinksProps.fontStyle
                    }}>

                        {this.props.sidebarLinksProps.hasReactRouterLinks ?
                            <Link style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="childLinks anchorLinks" to={childLink.href} >
                                {childLink.childLink}
                            </Link> :
                            <a style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="childLinks anchorLinks" href={childLink.href}onClick={(e) => this.handleMainLinkClick(chilldLink, e)} >{childLink.childLink}
                            </a>}
                    </div>
                </li>
            )
        }
        return (
            this.state.secondChildSublinks[key] && <ul className="sidebarLink-SubMenuList">{childListItems}</ul>
        )
    }

    getSubLinks(subLinksItems, key) {
        const subLinks = subLinksItems;
        var subListItems;
        if (subLinks.length == 0) return;
        else {
            subListItems = subLinks.map((subLink, key) =>
                <li className="sidebarLink-SubListItem" key={key}>
                    <div style={{
                        'fontSize': (this.props.sidebarLinksProps.fontSize - 4) + 'px',
                        'fontFamily': this.props.sidebarLinksProps.fontStyle
                    }} className="MainLinksAndExpandparent">
                        {subLink.childLinks.length ? <a style={{
                            'color': this.props.sidebarLinksProps.textColor
                        }} className="expandChildMenuIcon" href="#" onClick={() => this.expandChildMenu(key)}>
                            <span ><img src={expandIcon} /></span>
                        </a> : ''}

                        {this.props.sidebarLinksProps.hasReactRouterLinks ?
                            <Link style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="SubLinks anchorLinks" to={subLink.href} >
                                {subLink.subLink}
                            </Link> :
                            <a style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="SubLinks anchorLinks" href={subLink.href} onClick={(e) => this.handleMainLinkClick(subLink, e)} >{subLink.subLink}
                            </a>}
                    </div>
                    {subLink.childLinks.length ? this.getChildLinks(subLink.childLinks, key) : null}
                </li>
            )
        }

        return (
            this.state.firstChildSublink[key] && <ul className="sidebarLink-SubMenuList">{subListItems}</ul>
        )
    }

    getlinks(linkItems) {
        const links = linkItems;
        const listItems = links.map((link, key) =>
            <div key={key}>
                <li className="sidebarLink-MainListItem" >
                    <div style={{
                        'fontSize': (this.props.sidebarLinksProps.fontSize - 4) + 'px',
                        'fontFamily': this.props.sidebarLinksProps.fontStyle,
                        'color': this.props.sidebarLinksProps.textColor,
                    }} className="MainLinksAndExpandparent">

                        {link.subLinks.length ? <a style={{
                            'color': this.props.sidebarLinksProps.textColor
                        }} className="expandSubMenuIcon" href="#" onClick={() => this.expandSubMenu(key)}>
                            <span><img src={expandIcon} /></span>
                        </a> : ''}

                        {this.props.sidebarLinksProps.hasReactRouterLinks ?
                            <Link style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="MainLinks anchorLinks" to={link.href} >
                                {link.mainLink}
                            </Link> :
                            <a style={{
                                'color': this.props.sidebarLinksProps.textColor
                            }} className="MainLinks anchorLinks" onClick={(e) => this.handleMainLinkClick(link, e)} href={link.href}>{link.mainLink}
                            </a>}
                    </div>
                    {link.subLinks.length ? this.getSubLinks(link.subLinks, key) : null}
                </li>
            </div>
        )
        return (
            <ul className="sidebarLink-MainList">{listItems}</ul>
        )
    }

    render() {
        return (
            <div className="sidebarLinks">
                {this.getlinks(this.props.sidebarLinksProps.dataForLinks)}
                <hr />
            </div>
        );
    }
}

export default SidebarLinks;