import { BaseComponentProps } from '@/models/component.model'
import clsx from 'clsx'
import { TextFieldError } from './components/TextFieldError'
import { TextFieldLabel } from './components/TextFieldLabel'

interface TextFieldProps extends BaseComponentProps {
  direction?: 'column' | 'row'
}

export const TextField = ({ children, className, direction = 'column' }: TextFieldProps) => {
  return (
        <label className={
          clsx(
            'inline-flex w-full',
            { 'flex-col items-start': direction === 'column' },
            { 'items-center gap-2': direction === 'row' },
            className
          )
        }>
            {children}
        </label>
  )
}

TextField.Label = TextFieldLabel
TextField.Error = TextFieldError
