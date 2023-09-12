import cn from 'classnames'

export default function Sidebar(props) {

const classes = cn(
  'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating', {'visible' : props.toggleMenu}
)

  return (
    <div className={classes}>
        <ul>
            <li className='item link'>Item 1</li>
            <li className='item link'>Item 2</li>
            <li className='item link'>Item 3</li>
            <li className='item link'>Item 4</li>
            <li className='item link'>Item 5</li>

        </ul>
        
    </div>
  )
}




// import "./sidebar.css"
// import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

// const SidebarExampleVisible = () => (
// <div className='sidebar-container'>

//   <Sidebar.Pushable as={Segment}>
//     <Sidebar
//       as={Menu}
//       animation='overlay'
//       icon='labeled'
//       inverted
//       vertical
//       visible
//       width='thin'
      
//     >
//       <Menu.Item as='a'>
//         <Icon name='home' />
//         Home
//       </Menu.Item>
//       <Menu.Item as='a'>
//         <Icon name='gamepad' />
//         Games
//       </Menu.Item>
//       <Menu.Item as='a'>
//         <Icon name='camera' />
//         Channels
//       </Menu.Item>
//     </Sidebar>

//     <Sidebar.Pusher>
//       <Segment basic>
//         <Header as='h3'>Application Content</Header>
//         <Image src='/images/wireframe/paragraph.png' />
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>
//         <ul>yo</ul>

//       </Segment>
//     </Sidebar.Pusher>
//   </Sidebar.Pushable>
//   </div>

// )

// export default SidebarExampleVisible