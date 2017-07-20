import React, { Component } from 'react';
import './styles/sidebarContent.scss';

class SidebarDescription extends Component {

    render() {
        var descStyle = {
            'fontSize': this.props.sidebarContentProps.fontSize - 5,
            'fontFamily': this.props.sidebarContentProps.fontStyle,
            'color':this.props.sidebarContentProps.textColor,
        }
        if (this.props.sidebarContentProps.descriptionVisible)
            return (
                <div style={descStyle} className="sidebar-Description">
                    {this.props.sidebarContentProps.descriptionContent}
                    <hr />
                </div>
            );
        else
            return null;
    }
}

export default SidebarDescription;