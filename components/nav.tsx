import link from '../lib/link.d.json'
import Container from './container'
export default function Nav(){
   return (
    <nav className='bg-gray-800 fixed top-0'>
        <Container>
            <div className='relative flex items-center justify-between h-16'>
                <div className='absolute '></div>
            </div>
        </Container>
    </nav>
   )
}