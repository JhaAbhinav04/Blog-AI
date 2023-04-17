import React from 'react'

type Props = {}

const TrendFlex = (props: Props) => {
    return (
        <div className='flex justify-between gap-3 my-3'>
            {/* FlexBox Method */}
            <div className='basis-1/2 bg-wh-500 h-96'></div>

            <div className='flex flex-col basis-1/2 gap-3 h-96'>
                <div className='basis-1/2 bg-wh-500'></div>

                <div className='flex basis-1/2 gap-3'>
                    <div className='basis-1/2 gap-3 bg-wh-500'></div>
                    <div className='basis-1/2 gap-3 bg-wh-500'></div>
                </div>
            </div> 
        </div>
    );
}

export default TrendFlex