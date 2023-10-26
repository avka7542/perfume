import { Button } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'

export default function Paypal() {

    const paypal = useRef()

    useEffect(()=>{
        window.paypal.Buttons({
            createOrder: (data, actions, err)=> {
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units: [
                        {
                            description:"perfume",
                            amount:{
                                value:650.00,
                                currency_code:"NIS"
                            }
                        }
                    ]
                })
            },
            onApprove: async(data, actions)=> {
                const order = await actions.order.capture()
                console.log(order)
            },
            onError:(err)=> {
                console.log(err)
            }
        }).render(paypal.current)
    },[])

    

  return (
   <>
   <div ref={paypal}></div>
   </>
  )
}
