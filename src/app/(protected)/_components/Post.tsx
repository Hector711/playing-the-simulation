import React from 'react';
import Avatar from '@/app/(protected)/_components/Avatar';
import Link from 'next/link';
import LikeIcon from '@/icons/LikeIcon';
import CommentIcon from '@/icons/CommentIcon';
import SendIcon from '@/icons/SendIcon';
import SaveIcon from '@/icons/SaveIcon';
interface Post {
  profilePic: string;
  title: string;
  description: string;
  fullName: string;
  username: string;
  urlPost: string;
  urlProfile: string;
  labels: string[];
  type: string;
  numLikes: number;
  numComments: number;
}

export default function Post({
  profilePic,
  title,
  description,
  fullName,
  username,
  urlPost,
  urlProfile,
  labels,
  type,
  numLikes,
  numComments,
}: Post) {
  return (
    <article className='post'>
      <div className='post' id='top'>
        <a href='' className='underlined' id='post-type'>
          {type}
        </a>
        <a href='' className='underlined' id=''>
          {labels}
        </a>
        <a href='' className='underlined' id=''>
          #Finanzas
        </a>
        <a href='' className='underlined' id=''>
          #Fiscalidad
        </a>
      </div>
      <hr />

      <header className='post'>
        <Link href={urlProfile}>
          <Avatar src={profilePic} business='true' />
        </Link>
        <div id='urls-container'>
          <Link href={urlProfile} id='url-profile'>
            <h4>{fullName}</h4>
            <span>&#8226; @{username}</span>
          </Link>
          <Link href={urlPost} id='url-post'>
            <span>Hace 2 h</span>
          </Link>
        </div>
        <button id='save'>
          <SaveIcon className='post-icons' />
        </button>
        <button id='save'>
          Delete
        </button>
      </header>

      <section className='post'>
        <Link href={urlPost}>
          <h4>{title}</h4>
          <p>{description}</p>
        </Link>
      </section>
      <hr />
      <footer className='post'>
        <button>
          <LikeIcon className='post-icons' /> {numLikes}
        </button>
        <button>
          <CommentIcon className='post-icons' /> {numComments}
        </button>

        <button>
          <SendIcon className='post-icons' />
        </button>
      </footer>
    </article>
  );
}
