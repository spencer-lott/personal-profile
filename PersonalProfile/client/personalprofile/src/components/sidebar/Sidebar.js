import cn from 'classnames'

export default function Sidebar({toggleMenu}) {

const classes = cn(
  'ui', 'sidebar', 'overlay', 'left', 'inverted', 'menu', 'animating', {'visible' : toggleMenu}
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
