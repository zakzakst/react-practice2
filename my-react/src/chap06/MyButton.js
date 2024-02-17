// import PropTypes from 'prop-types'
import '../stories/button.css'

export default function MyButton({
  primary = false,
  backgroundColor = null,
  size = 'medium',
  label = 'Button',
  // handleClick,
  ...props
}){
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'

  return (
    <button
      type='button'
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      // onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  )
}

// MyButton.protoTypes = {
//   // primary: PropTypes.bool,
//   // backgroundColor: PropTypes.string,
//   // size: PropTypes.oneOf([
//   //   'small',
//   //   'medium',
//   //   'large',
//   // ]),
//   // label: PropTypes.string.isRequired,
//   // onClick: PropTypes.func,
//   handleClick: PropTypes.func,
// }