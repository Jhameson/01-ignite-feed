import { useState } from 'react'
import ptBr from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'

import styles from './Post.module.css'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: [{ type: string; content: string }]
  publishedAt: any
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState([''])
  const [newCommentText, setNewCommentText] = useState('')

  // const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit',
  // }).format(publishedAt)

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment(event: any) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: any) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete
    })
    setComments(commentWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph')
            return <p key={line.content}>{line.content}</p>
          else if (line.type === 'link')
            return (
              <p key={line.content}>
                <a href="">{line.content}</a>
              </p>
            )
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
        ></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.comentList}>
        {comments.map((comment) => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
