import Container from './container'
import config from '../config.json'
import React from 'react'

export default function Alert() {
    return (
        <div
            className='border-b bg-accent-1 border-accent-1 dark:color-gray-1 bg-'
        >
            <Container>
                <div className="py-2 text-center text-sm">
                    The source code for this blog is{' '}
                    <a
                        href={config.GitHub}
                        className="underline hover:text-success duration-200 transition-colors"
                    >
                        available on GitHub
                    </a>
                    .
                </div>
            </Container>
        </div>
    )
}