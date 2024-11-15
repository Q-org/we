// apps\n\pages\imges-search.tsx
import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// image.baidu.com/search/acjson?tn=resultjson_com&logid=10668724306941269824&ipn=rj&ct=201326592&is=&fp=result&fr=&word=111111111111&queryWord=111111111111&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&hd=&latest=&copyright=&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&expermode=&nojc=&isAsync=&pn=30&rn=30&gsm=1e&1706413162895=
// 创建一个Unsplash的API对象，使用您的API密钥
const unsplash = createApi({
  accessKey: "bN4a8VW7eenpkvpLL_O4KYYmLJRDJLfm7Eivoww1cuU",
});

// 定义一个图片卡片的组件，显示图片和一些操作按钮
export const PhotoCard = ({ photo }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={photo.urls.small}
        alt={photo.alt_description}
      />
      <CardActions disableSpacing>
        <Button
          startIcon={<FavoriteIcon />}
          size="small"
          color="secondary"
          href={photo.links.like}
          target="_blank"
        >
          {photo.likes}
        </Button>
        <Button
          startIcon={<ShareIcon />}
          size="small"
          color="primary"
          href={photo.links.download}
          target="_blank"
        ></Button>
        <Typography variant="caption" sx={{ marginLeft: "auto" }}>
          By {photo.user.name}
        </Typography>
      </CardActions>
    </Card>
  );
};

// 定义一个主组件，包含一个搜索框和一个图片列表
const ImgesSearch = () => {
  // 定义一些状态变量，用于存储用户输入的关键词，图片数据，和错误信息
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  // 定义一个函数，用于根据关键词搜索图片，并更新状态变量
  const searchPhotos = async () => {
    try {
      // 调用Unsplash的API，传入关键词，每页显示12张图片
      const result = await unsplash.search.getPhotos({
        query,
        perPage: 12,
      });
      // 如果成功，将图片数据存储到状态变量中，清空错误信息
      if (result.type === "success") {
        //@ts-ignore
        setPhotos(result.response.results);
        setError(null);
      } else {
        //@ts-ignore

        // 如果失败，将错误信息存储到状态变量中，清空图片数据
        setError(result.errors[0]);
        setPhotos([]);
      }
    } catch (e: Error | any) {
      // 如果出现异常，将异常信息存储到状态变量中，清空图片数据
      setError((e as any).message);
      setPhotos([]);
    }
  };

  // 定义一个函数，用于处理用户在搜索框中输入的事件，更新关键词状态变量
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 定义一个函数，用于处理用户按下回车键的事件，调用搜索图片的函数
  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      searchPhotos();
    }
  };

  // 定义一个函数，用于处理用户点击搜索按钮的事件，调用搜索图片的函数
  const handleButtonClick = () => {
    searchPhotos();
  };

  // 返回一个JSX元素，使用MUI的组件来布局和美化页面
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="照片"
            variant="outlined"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            sx={{ width: "100%" }}
            color="primary"
            onClick={handleButtonClick}
          >
            <SearchIcon />
          </IconButton>
        </Grid>
        {error && (
          <Grid item xs={12}>
            <Typography variant="h6" color="error" align="center">
              {error}
            </Typography>
          </Grid>
        )}
        {photos.map((photo) => (
          // @ts-ignore
          <Grid item xs={12} sm={6} md={4} key={photo?.id}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ImgesSearch;
