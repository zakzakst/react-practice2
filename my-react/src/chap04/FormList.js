import { useState } from 'react'

export default function FormList() {
  const [form, setForm] = useState({
    animals: ['dog', 'hamster'],
  })

  const handleFormList = (e) => {
    const data = []
    const opts = e.target.options
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value)
      }
    }
    setForm({
      ...form,
      [e.target.name]: data,
    })
  }

  const show = () => {
    console.log(`好きな動物：${form.animals}`)
  }

  return (
    <form>
      <label htmlFor='animals'>好きな動物：</label>
      <select
        id='animals'
        name='animals'
        value={form.animals}
        size='4'
        multiple={true}
        onChange={handleFormList}
      >
        <option value='dog'>イヌ</option>
        <option value='cat'>ネコ</option>
        <option value='hamster'>ハムスター</option>
        <option value='rabbit'>ウサギ</option>
      </select>
      <button
        type='button'
        onClick={show}
      >送信</button>
    </form>
  )
}