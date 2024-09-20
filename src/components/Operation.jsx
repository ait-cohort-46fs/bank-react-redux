import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../actions/accountActions';
import {fetchQuote} from '../actions/quoteAction';

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <>
            <div className='flex justify-center'>
                <button
                    className=' bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg py-2 px-4'
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw
                </button>
                <input
                    className='text-center border rounded-lg mx-1'
                    type='number'
                    value={sum}
                    onChange={e => setSum(+e.target.value)}
                />
                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg py-2 px-4'
                    onClick={() => dispatch(deposit(sum))}
                >Deposit
                </button>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={() => dispatch(fetchQuote())}
                    className='mt-1 bg-blue-300 hover:bg-blue-400 text-white font-bold rounded-lg text-lg py-2 px-12'
                >Get Quote</button>
            </div>
        </>
    )
}

export default Operation