/*! Last update: Sun Aug 14 2016 10:49:29 GMT+0800 (CST) */
webpackJsonp([10],{378:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(3),l=n(d),r=a(254),v=a(338),m=n(v),N=a(335),o={basic:'var instance = (\n    <Navbar >\n        <Navbar.Header>\n            <Navbar.Brand>\n                <Anchor href="#">Suite</Anchor>\n            </Navbar.Brand>\n        </Navbar.Header>\n        <Navbar.Collapse>\n            <Nav>\n                <Nav.Item active>Item A</Nav.Item>\n                <Nav.Item>Item B</Nav.Item>\n                <Nav.Item>Item C</Nav.Item>\n                <Nav.Item disabled>Item D</Nav.Item>\n                <Nav.Dropdown eventKey="E" select title="Item E">\n                    <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>\n                    <Nav.Item eventKey="E-2" >Item E-2</Nav.Item>\n                    <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>\n                    <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>\n                </Nav.Dropdown>\n            </Nav>\n            <Nav pullRight>\n                <Nav.Item eventKey={1} href="#">Link Right</Nav.Item>\n                <Nav.Item eventKey={2} href="#">Link Right</Nav.Item>\n            </Nav>\n        </Navbar.Collapse>\n    </Navbar>\n);\nReactDOM.render(instance, mountNode);\n',toggle:'var instance = (\n    <Navbar inverse>\n        <Navbar.Header>\n            <Navbar.Brand>\n                <Anchor href="#">Suite</Anchor>\n            </Navbar.Brand>\n            <Navbar.Toggle />\n        </Navbar.Header>\n        <Navbar.Collapse>\n            <Nav>\n                <Nav.Item active>Item A</Nav.Item>\n                <Nav.Item>Item B</Nav.Item>\n                <Nav.Item>Item C</Nav.Item>\n                <Nav.Item disabled>Item D</Nav.Item>\n                <Nav.Dropdown eventKey="E" select title="Item E">\n                    <Nav.Item eventKey="E-1" >Item E-1</Nav.Item>\n                    <Nav.Item eventKey="E-2" >Item E-2</Nav.Item>\n                    <Nav.Item eventKey="E-3" >Item E-3</Nav.Item>\n                    <Nav.Item eventKey="E-4" >Item E-4</Nav.Item>\n                </Nav.Dropdown>\n            </Nav>\n            <Nav pullRight>\n                <Nav.Item eventKey={1} href="#">Link Right</Nav.Item>\n                <Nav.Item eventKey={2} href="#">Link Right</Nav.Item>\n            </Nav>\n        </Navbar.Collapse>\n    </Navbar>\n);\nReactDOM.render(instance, mountNode);\n'};t["default"]=l["default"].createClass({displayName:"navbars",render:function(){return l["default"].createElement(r.Col,{md:9,sm:12},l["default"].createElement("h1",{className:"page-header"},"Navbars",l["default"].createElement("span",{className:"page-header-en"},l["default"].createElement("code",null,"Navbar"),"、",l["default"].createElement("code",null,"Navbar.Header"),"、",l["default"].createElement("code",null,"Navbar.Brand"),"、",l["default"].createElement("code",null,"Navbar.Collapse"),"、",l["default"].createElement("code",null,"Navbar.Toggle"))),l["default"].createElement("h3",null,"默认样式"),l["default"].createElement(m["default"],{code:o.basic}),l["default"].createElement("h3",null,"响应式"),l["default"].createElement("p",null,"在小屏幕上 ",l["default"].createElement("code",null,"Navbar.Collapse")," 中的元素会隐藏， 可以设置一个 ",l["default"].createElement("code",null,"Navbar.Toggle")," 按钮，点击后展开被隐藏的元素。"),l["default"].createElement(m["default"],{code:o.toggle}),l["default"].createElement("h3",null,"组件属性"),l["default"].createElement(N.Markdown,null,a(379)))}})},379:function(e,t){e.exports="<table> <thead> <tr> <th>属性名称</th> <th>类型</th> <th>默认值</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>classPrefix</td> <td>string</td> <td></td> <td></td> </tr> <tr> <td>fixedTop</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>fixedBottom</td> <td>boolean</td> <td>false</td> <td></td> </tr> <tr> <td>componentClass</td> <td>elementType</td> <td></td> <td></td> </tr> <tr> <td>onToggle</td> <td>function</td> <td></td> <td></td> </tr> </tbody> </table>"}});