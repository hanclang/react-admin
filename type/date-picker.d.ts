import type { Dayjs } from 'dayjs'
import type { PickerDateProps, PickerTimeProps, PickerProps, RangePickerProps as BaseRangePickerProps } from 'antd/lib/date-picker/generatePicker'
import type { PickerComponentClass } from 'antd/lib/date-picker/generatePicker/interface'
import type { DatePicker } from 'antd'

declare module 'antd' {
  namespace antd {
    const DatePicker: Omit<DatePicker, 'WeekPicker' | 'RangePicker' | 'MonthPicker' | 'YearPicker' | 'TimePicker' | 'QuarterPicker'> & {
      WeekPicker: PickerComponentClass<Omit<PickerDateProps<Dayjs>, 'picker'>, unknown>
      MonthPicker: PickerComponentClass<Omit<PickerDateProps<Dayjs>, 'picker'>, unknown>
      YearPicker: PickerComponentClass<Omit<PickerDateProps<Dayjs>, 'picker'>, unknown>
      RangePicker: PickerComponentClass<BaseRangePickerProps<Dayjs>, unknown>
      TimePicker: PickerComponentClass<Omit<PickerTimeProps<Dayjs>, 'picker'>, unknown>
      QuarterPicker: PickerComponentClass<Omit<PickerTimeProps<Dayjs>, 'picker'>, unknown>
    }
  }
  export = antd
  export as namespace antd
}
