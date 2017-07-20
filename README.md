
# react-sliding-sidemenu
> react sliding sidemenu is a fully customisable responsive sidebar menu.
this will gives a quick access to menu links to navigate through different routes in application. 




## Installation
`npm install react-sliding-sidemenu --save`

## Using react-sliding-sidemenu

import componnent from  :- **react-sliding-sidemenu_** in your component.
pass props to the component with data and avaialbe props to customise and you are done.
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from 'react-sliding-sidemenu'

class SidebarFooter extends Component {
    render() {
        return (
            <div>
            //call the Sidebar component with props
                <Sidebar {...props}>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
)
```
