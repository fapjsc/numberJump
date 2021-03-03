import { Countup } from 'count-up-react';
import React, { useEffect, useState } from 'react';
import './FlipNumber.css'

export const FlipNumber = () => {
    const [number, setNumber] = useState(3945.52);
    const [symbol, setSymbol] = useState(',');
    const [itemHeight, setItemHeight] = useState(40);
    const [scrollTime, setScrollTime] = useState(1000);
    const [className, setClassName] = useState('my-class');
    const [initStatus, setInitStatus] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setNumber(91764.13);
    //     }, 1000);
    // }, []);
    return (
        <div>
            {/* <div className="demo">
                <h3>默认</h3>
                <Countup number={number} />
            </div>
            <div className="demo">
                <h3>千位分割</h3>
                <Countup number={number} symbol={symbol} />
            </div> */}
            <div className="demo">
                <Countup
                    number={number}
                    className={className}
                    itemHeight={itemHeight}
                    initStatus={initStatus}
                    itemHeight={itemHeight}
                    symbol={symbol}
                />
            </div>
        </div>
    );
}


export default FlipNumber

