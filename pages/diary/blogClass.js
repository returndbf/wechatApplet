export class blog {
  constructor(id, userId, uploadTime, title, content, img, uploadMonth, weather, weatherIcon) {
    this.id = id;
    this.userId = userId;
    this.uploadTime = uploadTime;
    this.title = title;
    this.content = content;
    this.img = img;
    this.uploadMonth = uploadMonth;
    this.weather = weather;
    this.weatherIcon = weatherIcon
  }
}