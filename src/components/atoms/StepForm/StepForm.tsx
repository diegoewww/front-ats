'use client'
// import { MenuItem } from 'primereact/menuitem'
// import { Steps } from 'primereact/steps'
import { Tabs, Tab } from '@nextui-org/tabs'

export interface Step {
  label: string
  disabled?: boolean
}

interface Props {
  // items: MenuItem[]
  items: Step[]
  activeIndex?: number
  setActiveIndex: (index: number) => void
  readOnly?: boolean
}

export default function StepForm ({ activeIndex = 0, setActiveIndex, readOnly = false, items }: Props) {
  return (
    <div>
      {/* <Steps
        model={items}
        activeIndex={activeIndex}
        onSelect={(e) => setActiveIndex(e.index)}
        readOnly={readOnly}
      /> */}
      <Tabs selectedKey={`${activeIndex}`}>
        {items.map((step, index) => (
          <Tab
            key={index}
            title={step.label}
            onClick={() => setActiveIndex(index)}
            disabled={step.disabled}
          />
        ))}
      </Tabs>
    </div>
  )
}
