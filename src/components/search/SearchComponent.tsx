import { Input } from '../../ui/input/Input'
import { useSearch } from './useSearch'

type Props = {
  debounceDelay?: number
  fullWidth?: boolean
  handleSearchButtonClick?: (value: string) => void
  paramName?: string
  withAutoSearch?: boolean
}

export const SearchComponent = ({
  debounceDelay,
  fullWidth,
  handleSearchButtonClick,
  paramName = 'search',
  withAutoSearch = true,
}: Props) => {
  const { handleChangeSearchInput, handleClickSearchButton, t, value } = useSearch({
    debounceDelay,
    handleSearchButtonClick,
    paramName,
    withAutoSearch,
  })

  return (
    <div className={fullWidth ? 'w-full' : 'w-[645px]'}>
      <Input
        inputType={'search'}
        onChange={handleChangeSearchInput}
        onSearchClick={handleClickSearchButton}
        placeholder={t.search}
        value={value}
      />
    </div>
  )
}
