import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Moment from 'react-moment';

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];

  const [leftPadding, setLeftPadding] = useState("0px");

  return (
    <Article
      onMouseOver={() => setLeftPadding("3em")}
      onMouseLeave={() => setLeftPadding("0px")}
    >
      <Link link={item.link}>
        <Content style={{ left: leftPadding }}>
          {state.theme.featured.showOnList && (
            <FeaturedMedia id={item.featured_media} />
          )}
          <ItemInfo>
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            {author && (
              <AuthorName>
                By <b>{author.name}</b>
              </AuthorName>
            )}
            <PublishDate>
              <Moment format="DD.MM.YYYY">
                {item.date}
              </Moment>
            </PublishDate>
          </ItemInfo>
        </Content>
      </Link>
    </Article>
  );
};

const Article = styled.div`
background: #282828;
border-top: 1px solid black;
border-bottom: 1px solid black;
margin-top: 1.5em;
`;

const Title = styled.h1`
font-size: 2rem;
color: black;
margin: 0;
padding-top: 24px;
padding-bottom: 8px;
box-sizing: border-box;
`;

const AuthorName = styled.span`
color: black;
font-size: 0.9em;
`;

const StyledLink = styled(Link)`
padding: 15px 0;
`;

const PublishDate = styled.span`
color: black;
font-size: 0.9em;
`;

const Content = styled.div`
display: flex;
position: relative;
transition: 0.5s !important;
margin-bottom: -0.1px;

@media (max-width: 768px) {
  flex-direction: column;
}
`;

const ItemInfo = styled.div`
display: flex;
flex-direction: column;
background: white;
width: 30%;
padding-left: 1em;
font-weight: bold;
@media (max-width: 768px) {
  width: 100%;
  padding-left: 0;
  padding-bottom: 1em;
}
`;

export default connect(Item);
