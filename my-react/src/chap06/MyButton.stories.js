import MyButton from './MyButton'

export default {
  title: 'MyApp/MyButton',
  component: MyButton,
  args: {
    label: 'Push!!',
  },
}

// export const Index = {
//   render: () =>
//     <MyButton
//       primary
//       size='medium'
//       label='ボタン'
//       onClick={() => console.log('Hello, Storybook!!')}
//     />
// }

// export const White = {
//   render: () =>
//     <MyButton
//       size='small'
//       label='ボタン'
//       backgroundColor='#fff'
//     />
// }

export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    onClick: () => console.log('Hello, Storybook!!'),
  },
}

export const White = {
  args: {
    size: 'small',
    // label: 'ボタン',
    backgroundColor: '#fff',
  },
}

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow',
  },
}