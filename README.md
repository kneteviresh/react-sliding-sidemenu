
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

## Available features from props

<table>
  <tr>
    <th>Props</th>
    <th>Description</th>
    <th>Examples</th>
  </tr>
  <tr>
    <td>top</td>
    <td>sets the margin-top</td>
    <td>number :  80,100,150 etc</td>
  </tr>
  <tr>
    <td>expandIconStyle</td>
    <td>different icons available from bootstrap 3.3.7</td>
    <td>plus, chevron-right , arrow-right, circle-arrow-right,menu-right,menu-hamburger </td>

  </tr>
  <tr>
    <td>profileVisible</td>
    <td>if true , profile section will be visible</td>
    <td>trus,false</td>

  </tr>
  <tr>
    <tdtextColor</td>
    <td>Color of the text inside side menu</td>
    <td>string : 'black' ,'#000'</td>

  </tr>
  <tr>
    <td>fontStyle</td>
    <td>Font style/font family of the text inside side menu</td>
    <td>'Arial', 'Helvetica', 'sans-serif'</td>

  </tr>
  <tr>
    <td>fontSize</td>
    <td>sets the font size of the text inside side menu</td>
    <td>number: 25(default),30 50</td>
  </tr>
  
  
  <tr>
    <td>ProfileName</td>
    <td>Sets the profile name </td>
    <td>string: 'any string'</td>
  </tr>
  
  <tr>
    <td>ProfileName</td>
    <td>Sets the profile name </td>
    <td>string: 'any string'</td>
  </tr>
  
  <tr>
    <td>hasReactRouterLinks</td>
    <td>pass this as true if application is using react-router to navigate </td>
    <td>true,false</td>
  </tr>
  
  <tr>
    <td>descriptionVisible</td>
    <td>if true , description section will be visible </td>
    <td>true,false</td>
  </tr>
  
  <tr>
    <td>sidebarTitle</td>
    <td>Title of the sidebar</td>
    <td>string: 'any string'(30 characters are preferred)</td>
  </tr>
  
  <tr>
    <td>descriptionContent</td>
    <td>free text or html element to be passed. this will be the content of the description section.</td>
    <td>string: 'any free text ' or '<p>any free text</p>'</td>
  </tr>
  
   <tr>
    <td>orderOfContents</td>
    <td>specifies in which order the profile,description and links section should be visible</td>
    <td>object : orderOfContents{profile: 1,
            description: 2,
            links: 3 } 
    </td>
  </tr>
  
  <tr>
    <td>profileImage</td>
    <td>Provide the image for profile picture</td>
    <td>import image variable</td>
  </tr>
  
  <tr>
    <td>dataForLinks</td>
    <td>array of objects to be passed for generating links</td>
    <td>Array of objects (explained below)</td>
  </tr> 
</table>

## functions 

### onLinkItemClick(clickedLink)
   this function can be passed as props to the component , which will be executed on click of the menu links.
function will recieve an arguement which holds the details of the clicked link.


## **dataForLinks** sample object

**href** below indicates the navigation to be routed on click on the links.(same as href for anchor tag)

```js
dataForLinks:
        [
            {
                mainLink: "Main Link 1",
                href: "passtheLink",
                subLinks: [
                    {
                        subLink: "Sub Link 1",
                        href: "passtheLink",
                        childLinks: [
                            {
                                childLink: 'Child Link 1',
                                href: 'passtheLink'
                            },
                            {
                                childLink: 'Child Link 2',
                                href: 'passtheLink'
                            }
                        ]
                    },
                    {
                        subLink: "Sub Link 2",
                        href: "passtheLink",
                        childLinks: []
                    },
                    {
                        subLink: "SubLink 3",
                        href: "passtheLink",
                        childLinks: []
                    }
                ]
            }
         ]
```
