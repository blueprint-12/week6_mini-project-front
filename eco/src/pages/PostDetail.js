import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadOneDB } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { useRef } from "react";

function PostDetail() {
  const post = useSelector((state) => state.post.list);
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state.data;

  console.log(data.id);
  console.log(post);

  // const updatePosting = () => {
  //   dispatch(updatePostDB());
  // };

  React.useEffect(() => {
    dispatch(loadOneDB(data.id));
  }, []);

  return (
    <>
      <Header />
      <PostDetailContainer>
        <PostDetailTitle>
          <p>제목</p>
          <InputText placeholder={post.title} />
        </PostDetailTitle>
        <PostDetailTitle>
          <p>내용:</p>
          <InputText />
        </PostDetailTitle>
        <PostDetailImage>이미지:{post.image}</PostDetailImage>
        <CommentContainer>
          <CommentTop>
            <CommentInput placeholder="댓글을 입력해주세요" />
            <button>수정버튼</button>
            <button>삭제버튼</button>
          </CommentTop>

          <CommentList>댓글 모음 컨테이너</CommentList>
        </CommentContainer>
      </PostDetailContainer>
    </>
  );
}

export default PostDetail;

const PostDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostDetailTitle = styled.div`
  width: 200px;
  display: flex;
`;
const PostDetailText = styled.div``;
const PostDetailImage = styled.div``;
const CommentContainer = styled.div``;
const CommentTop = styled.div``;
const CommentInput = styled.input``;
const CommentList = styled.div`
  border: 1px solid black;
`;

const InputText = styled.input`
  ::placeholder {
    color: black;
  }
`;
