import { useForm } from "react-hook-form";
import {firestore} from '../src/firebase/index'

import Input from "../components/actions/Input"
import Wrapper from "../components/layout/Wrapper"
import Label from "../components/layout/Label"
import Body from '../components/layout/Body'
import Button from '../components/actions/Button'
import TopBar from '../components/layout/TopBar'


const NewEvent = () => {
    const form = useForm()
    const onSubmit = (data) => {
        const event = {
            name: data.name,
            url: data.link,
            location: data.location,
            date: data.date,
            description: data.description,

        }
        firestore.collection('events').doc().set(event).then(e => console.log(e))
    }
    return (
        <>
            <TopBar />
            <Body>
                <Wrapper as='form' onSubmit={form.handleSubmit(onSubmit)}>
                    <Wrapper.Title>New event</Wrapper.Title>
                    <Label htmlFor='form_name_input'>
                        Event name
                        <Input type='text' placeholder='Event name' name='name' id='form_name_input' ref={form.register} />
                    </Label>
                    <Label htmlFor='form_link_input'>
                        Event link
                        <Input type='text' placeholder='Event link' name='link' id='form_link_input' ref={form.register} />
                    </Label>
                    <Label htmlFor='form_link_input'>
                        Event location
                        <Input type='text' placeholder='Event link' name='location' id='form_location_input' ref={form.register} />
                    </Label>
                    <Label htmlFor='form_link_input'>
                        Event date
                        <Input type='datetime-local' placeholder='Event link' name='date' id='form_date_input' ref={form.register} />
                    </Label>
                    <Label htmlFor='form_link_input'>
                        Event description
                        <Input type='text' placeholder='Event link' name='description' id='form_desc_input' ref={form.register} />
                    </Label>
                    <Button>Add event</Button>
                </Wrapper>
            </Body>
        </>
    )
}

export default NewEvent