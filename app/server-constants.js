/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling

const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL
const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
const NEXT_PUBLIC_SITE_TITLE = 'ハッカワズブログ'
const NEXT_PUBLIC_SITE_DESCRIPTION = 'シビックテック領域で活躍する人をメインに紹介していく予定です。CivicTech LTとは、市民技術コミュニティのLightning Talk(ライトニングトーク)イベントの略称です。Lightning Talkとは、5分以内で1つのテーマを簡潔に発表する形式のイベントであり、CivicTech LTではこれまで市民技術分野で活躍するスピーカーによるデータ分析や機械学習、人工知能(AI)に関するLTが行われています。'
const NUMBER_OF_POSTS_PER_PAGE = 10

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID,
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GA_TRACKING_ID,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NUMBER_OF_POSTS_PER_PAGE,
}
