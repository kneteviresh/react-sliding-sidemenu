import React, { Component } from 'react';
import './styles/sidebarHeader.scss';
import closeIcon from './icons/closeIcon.png';


class SidebarHeader extends Component {
    render() {
        var headerStyle = {
            'fontSize': this.props.sidebarHeaderProps.fontSize + 'px',
            'fontFamily': this.props.sidebarHeaderProps.fontStyle,
            'color': this.props.sidebarHeaderProps.textColor
        }
        return (
            <div style={headerStyle} className="sidebarHeader">
                <div className="row">
                    <div className="center sidebarHeader-text">
                        <strong>{this.props.sidebarHeaderProps.sidebarTitle}</strong>
                    </div>
                    <div>
                        <a style={{
                            'fontSize': this.props.sidebarHeaderProps.fontSize + 'px',
                            'color': this.props.sidebarHeaderProps.textColor
                        }} className="center sidebarHeader-close-button" onClick={this.props.closeSidebar} href="#">
                            <span><img src={closeIcon} /></span>
                        </a>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default SidebarHeader;