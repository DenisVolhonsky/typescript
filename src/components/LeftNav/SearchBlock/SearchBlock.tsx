import React, { FC } from 'react';
import './SearchBlock.scss'

interface SearchBlockProps {
    className?: string
}

const SearchBlock:FC<SearchBlockProps> = ({children}) => (
    <div className="Search__block">
        {children}
    </div>
)

export default  SearchBlock;