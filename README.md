
# react-sliding-sidemenu
> react sliding sidemenu is a fully customisable responsive sidebar menu.
this will gives a quick access to menu links to navigate through different routes in application. 


**[Live Demo](https://kneteviresh.github.io//)** 

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

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
