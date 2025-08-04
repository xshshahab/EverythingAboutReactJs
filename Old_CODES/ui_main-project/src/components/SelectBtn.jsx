import React,{useId} from 'react'

const SelectBtn = React.forwardRef(function (
    {
        options,
        label,
        className,
        ...props
    }, ref
){

    const id = useId()

    return (
        <div className='w-full'>
            { label && <label htmlFor={id} className={`${className}`} ></label>}
            <select id={id} {...props} ref={ref} className={`w-full px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}>
                {
                    options?.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}) 

export default SelectBtn


// Upar ka syntax bhi useful hai or ye syntax to direct use karlo export main hi -> function() {} bas export main forwardRef use karna hai baki all set.
// export default React.forwardRef(SelectBtn)
