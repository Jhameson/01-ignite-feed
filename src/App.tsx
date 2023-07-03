import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post, PostType } from './components/Post/Post'

import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jhameson.png',
      name: 'Jhameson Lucas',
      role: 'Tech Lead',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        type: 'paragraph',
        content: 'Laboriosam totam ea, modi, assumenda officia exercitationem,',
      },
      {
        type: 'paragraph',
        content:
          'accusantium distinctio asperiores quos culpa eos consequuntur eveniet ',
      },
      {
        type: 'link',
        content: ' consequuntur eveniet ',
      },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jhameson.png',
      name: 'Jhameson Lucas',
      role: 'Tech Lead',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        type: 'paragraph',
        content: 'Laboriosam totam ea, modi, assumenda officia exercitationem,',
      },
      {
        type: 'paragraph',
        content:
          'accusantium distinctio asperiores quos culpa eos consequuntur eveniet ',
      },
      {
        type: 'link',
        content: ' consequuntur eveniet ',
      },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Jhameson Lucas',
      role: 'Tech Lead',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        type: 'paragraph',
        content: 'Laboriosam totam ea, modi, assumenda officia exercitationem,',
      },
      {
        type: 'paragraph',
        content:
          'accusantium distinctio asperiores quos culpa eos consequuntur eveniet ',
      },
      {
        type: 'link',
        content: ' consequuntur eveniet ',
      },
    ],
    publishedAt: new Date('2023-05-11 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((posts) => {
            return <Post key={posts.id} post={posts} />
          })}
        </main>
      </div>
    </div>
  )
}
