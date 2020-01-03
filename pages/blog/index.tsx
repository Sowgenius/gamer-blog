  import React from 'react';
  import {Layout} from 'components/layout';
import { BlogApi } from 'services/blog';
import { Api } from 'services/api';

  type BlogPagesProps = {
    entries: Array<BlogPost>;
  };

  export default class blogPage extends React.Component<BlogPagesProps> {
    static async getInitialProps() {
      const api = new BlogApi();
      const entries = await api.fetchBlogEntries();
      return { entries };
    }

    renderBlogList = entries =>
      entries.map((entry, i) => {
        return (
          <Blogbox
            key={i}
            id={entry.id}
            slug={entry.slug}
            imageUrl={entry.heroImage.imageUrl}
            title={entry.title}
            author={entry.author.name}
            description={entry.description}
            tag={entry.tag}
          />
        );
      });


      render() {
        const {entries} = this.props;
        return (
          <Layout>
            <h1>Blog</h1>
            <div className="row mt-3">
              {entries.length > 0 && this.renderBlogList(entries)}
            </div>
          </Layout>
        );
      }
  }

