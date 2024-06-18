import axios from "axios";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNlMzg4ZDcyYjNlYTAwMTU3MWZjZjAiLCJpYXQiOjE3MTczMjAwNzMsImV4cCI6MTcxODUyOTY3M30.ty0tvN0gXJoMaYLILPozIXpd3J4I1Zm_rlf4cL8XTa4";

export default axios.create({
  baseURL: "https://striveschool-api.herokuapp.com/api/comments/",
  headers: { Authorization: `Bearer ${token}` },
});
