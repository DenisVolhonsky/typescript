import React from 'react'

interface Props {
  data: string;
}

const TestComponent = (props: Props) => {
    return (
        <div className="container">
            <div>{props.data}</div>
        </div>
    )
}

export default TestComponent
