'use client'

export function Button({onClick, children}) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}
























/* 
//in page.js

'use client'
import { Button } from "../app/Zcomponents/Button.js"


 //* Challenge: Add an onClick handler to the Button
 //* component instance (the one on this page). Then
 //* make whatever changes you need for it to actually
 //* work.
 //* 
 //* Clicking the button should log "Logging in..." 
 //* to the console.
 

export default function Home() {
  const clicked = () => {console.log('Logging in')}
  return (
    <main>
      <Button onClick={clicked}>
        Log in with Google
      </Button>
    </main>
  )
}



 */