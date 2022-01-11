import express from "express";
import Article from "../model/article.model";

type NewArticle = {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  isAdjustable: boolean;
};

const router = express.Router();

// asynk는 비동기 뜻으로 데이터가 다 넘어올때까지 기다리겠다
// await 은 여기에서 일어나겟다 이 뜻이다
//거래 글 생성 api
router.post("/articles", async (req, res) => {
  const newArticle = req.body as NewArticle;
  if (!newArticle) {
    return res.status(400).json();
  }

  const article = await Article.create({
    title: newArticle.title,
    description: newArticle.description,
    image: newArticle.image,
    location: newArticle.location,
    price: newArticle.price,
    isAdjustable: newArticle.isAdjustable,
  });

  return res.status(201).json({
    id: article.id,
  });
});

//전체목록 띄우기->  req.query 이용해서 해당 지역 목록 띄우도록 수정
router.get("/articles", async (req, res) => {
  const { location } = req.query;
  if (!location) {
    const articles = await Article.findAll();
    return res.status(200).json(articles);
  }

  const articles = await Article.findAll({
    where: {
      location: location,
    },
  });

  return res.status(200).json(articles);
});

export default router;
