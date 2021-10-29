/*
 * @Author: Deng Pengyu
 * @Date: 2021-10-23 13:41:14
 * @LastEditTime: 2021-10-23 13:43:39
 * @LastEditors: Deng Pengyu
 * @FilePath: /next-demo/pages/post/first.tsx
 * @Description: 
 */
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}