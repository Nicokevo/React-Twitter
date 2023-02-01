import { useState } from 'react'

import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'NachoAoe',
    name: 'Aldeana ',
    isFollowing: false
  },
  {
    userName: 'TatohAoe',
    name: 'Tatito',
    isFollowing: true
  },
  {
    userName: 'BillGates',
    name: 'Bill Gates',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}