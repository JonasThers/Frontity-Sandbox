import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Moment from 'react-moment';

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];

  const [leftPadding, setLeftPadding] = useState("-70%");

  return (
    <Article
      onMouseOver={() => setLeftPadding("0")}
      onMouseLeave={() => setLeftPadding("-70%")}
    >
      <Link link={item.link}>
        <ArticleWrapper>
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}  style={{ left: leftPadding }} />
      )}
        <Content>
          {state.theme.featured.showOnList && (
            <FeaturedMedia id={item.featured_media} />
          )}
          <ItemInfo>
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
            <InfoWrapper>
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
            </InfoWrapper>
          </ItemInfo>
        </Content>
        </ArticleWrapper>
      </Link>
    </Article>
  );
};

const Article = styled.div`
border-top: 1px solid black;
border-bottom: 1px solid black;
margin-top: 1.5em;
@media (min-width: 1268px) {
  min-height: 300px;
}
`;

const ArticleWrapper = styled.div`
display: flex;
overflow: hidden;
position: relative;
`;

const Title = styled.h1`
font-size: 1.5rem;
color: black;
margin: 0;
padding-top: 24px;
padding-bottom: 8px;
box-sizing: border-box;
`;

const AuthorName = styled.span`
color: black;
font-size: 0.9em;
margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
padding: 15px 0;
`;

const PublishDate = styled.span`
color: black;
font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  display: none;
  color: white;
  @media (min-width: 1268px) {
    width: calc(65% - 0.25em);
    height: 100%;
    padding-left: 1em;
    padding-right: 1em;
    position: absolute;
    
    z-index: 100;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    background: rgba(0, 0, 0, 0.5);
    transition: 0.5s !important;
  }
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
@media (min-width: 1268px) {
  min-height: 300px;
}
`;

const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1268px) {
  position: absolute;
  bottom: 24px;
}
`;

export default connect(Item);
