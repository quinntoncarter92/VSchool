import React from 'react'
import { FormContextConsumer } from './formContext'

function NewListItem(){
    return(
            <FormContextConsumer>
                {context =>(
                    <div className='newlistitem'>
                        <h3 value={context.uglything.uglyThing}> </h3>
                        <img src={context.uglything.uglyURL}/>
                        <h6 value={context.uglything.uglyDesc}> </h6>
                    </div>
                )}
            </FormContextConsumer>
    )
}

export default NewListItem