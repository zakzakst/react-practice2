import './SelectStyle.css'
import cn from 'classnames'

export default function SelectStyle({ mode }) {
  return (
    // <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>こんにちは、世界！</div>

    // <div className={cn(
    //   'box',
    //   mode === 'light' ? 'light' : 'dark'
    // )}>こんにちは、世界！</div>

    <div className={cn(
      'box',
      {
        light: mode === 'light',
        dark: mode === 'dark'
      },
    )}>こんにちは、世界！</div>
  )
}