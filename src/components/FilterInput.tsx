import React from 'react'
import { InputChangeEvent } from '../types'
import searchIcon from "../assets/search.svg"


const FilterInput = (props: FilterInputProps) => {
  return (
    <div className="input-wrapper">
      <input value={props.searchValue} onChange={props.onChangeHandler} placeholder="Search" />
      <img src={searchIcon} alt="search icon" />
    </div>
  )
}

interface FilterInputProps {
  searchValue: string;
  onChangeHandler: (event: InputChangeEvent) => any;
}

export default FilterInput
