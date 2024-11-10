import { Button } from 'components'

export const ThemePage = () => {
  return (
    <>
      <p>This is theme page</p>
      <div className='list-button'>
        <p>Theme Button</p>
        <Button type='primary'>Primary button</Button>
        <Button className='ml-2'>Default button</Button>
        <Button type='dashed' className='ml-2'>
          Dashed button
        </Button>
        <Button type='link' className='ml-2'>
          Link button
        </Button>
        <Button type='text' className='ml-2'>
          Text button
        </Button>
      </div>
      <div className='list-font-title my-3'>
        <p>Theme Font</p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
    </>
  )
}
