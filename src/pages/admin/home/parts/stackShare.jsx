import { Helmet } from 'react-helmet';
export const StackShare = () => {
  return (
    <>
      <h2 className="title">StackShare</h2>
      <a data-theme="dark" data-layers="1,2,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/8735dd74b0339208e9210ba4d6a7bd"></a>
      <Helmet>
        <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script>
      </Helmet>
    </>
  )
}