class ProjectInput {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLFormElement;
   titleInputElement: HTMLInputElement;
   desriptionInputElement: HTMLInputElement;
   peopleInputElements: HTMLInputElement;

   constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app') as HTMLDivElement;

      // importNode is a method of the Document interface. It copies the content of a node from another document into the current document.
      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = 'user-input';

      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
      this.desriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
      this.peopleInputElements = this.element.querySelector('#people') as HTMLInputElement;

      this.configure();
      this.attach();
   }
   private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.titleInputElement.value);
   }

   private configure() {
      this.element.addEventListener('submit', this.submitHandler.bind(this));
   }

   private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
   }
}

const prjInput = new ProjectInput();
