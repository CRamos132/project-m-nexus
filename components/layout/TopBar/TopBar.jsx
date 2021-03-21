import React from 'react'
import Link from 'next/link'
import {Bar} from './style'

const TopBar = () => {
    return (
        <Bar>
            <Bar.Section>
                Logo
            </Bar.Section>
            <Bar.Section>
                <Bar.Item>
                    <Link href='/'>Home</Link>
                </Bar.Item>
                <Bar.Item>
                    <Link href='/streams'>Streams</Link>
                </Bar.Item>
                <Bar.Item>
                    <Link href='/events'>Events</Link>
                </Bar.Item>
                <Bar.Item>
                    <Link href='/newevent'>New Event</Link>
                </Bar.Item>
            </Bar.Section>
        </Bar>
    )
}

export default TopBar