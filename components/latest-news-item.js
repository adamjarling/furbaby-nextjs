import React from "react";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutHeadline from "components/headline-callout/headline";
import LinkButton from "components/link-button";
import Date from "components/date";
import ExternalLink from "components/external-link";

export default function LatestNewsItem({ post }) {
  return (
    <HeadlineCalloutWrapper isWhite>
      <h2 className="big-title text-center">Latest News</h2>
      <HeadlineCalloutSubhead>
        <Date dateString={post.date} />
      </HeadlineCalloutSubhead>
      <HeadlineCalloutHeadline>{post.title}</HeadlineCalloutHeadline>

      <LinkButton
        isInverted
        href={post.externalUrl ? post.externalUrl : `/posts/${post.id}`}
      >
        View Article
      </LinkButton>
    </HeadlineCalloutWrapper>
  );
}
