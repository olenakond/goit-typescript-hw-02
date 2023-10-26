/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component <T> {
  constructor (public props: T) {}
}

interface PageObject {
  title: string;
}

class Page extends Component <PageObject> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};