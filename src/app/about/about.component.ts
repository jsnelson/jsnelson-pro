import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jsn-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  public biography: Array<string> = [`

  Born in the summer of 1986 in Cleveland, John Nelson knew from a very young age that he was going to work with computers. His father had built a few computers that were set up around the house and he even had some games for them.`,
   `By  middle school age, John started writing little programs for his computer and learning C++ and Visual Basic; his learning continued into high school where he earned an award for his computer programming classwork. At the end of his sophomore year of high school, John took advantage of an offer of scholarship to the  Early College.`,
  `He traveled to Massachusetts and began college at Simon's Rock College of Bard (now, Bard College at Simon's Rock). From the start, John knew he would major in Computer Science and took as many programming and computer theory classes as he could. There, he was exposed to Java for the first time and began exploring object oriented design. Fascinated by the stability and flexibility of the Mac OS X platform, John purchased his first Mac, a PowerBook G4. Thanks to that computer and his insatiable hunger to learn how things work, John taught himself and took the exams to become an Apple Certified Technician.`,
  `While at Simon’s Rock, John also began dabbling in the digital arts, enamored with the possibilities of what a computer could bring to the world of art. This was when John was introduced to Max with MSP, the visual programming language from Cycling ’74, and Flash and Director (with ActionScript and Lingo, respectively) from Macromedia. After he graduated from Simon’s Rock, John spent some time working on his art and prepared a portfolio that gained him admission to the School of Art at Bowling Green State University in the Digital Art program.`,
  `While he struggled some with the artistic foundations, John loved his digital arts courses and augmented them with some of his beloved computer science. He eventually realized that he did, in fact, enjoy programming more than creating art and focused his studies on computer science and graduated with a Bachelor of Science degree with a major in Computer Science and (not to abandon his art work) a minor in Art, focusing on the digital.`,
  `During his time at Bowling Green, John was initially employed by the IT department doing hardware repairs on the computers on campus. He was already certified for the Apple machines and was quickly certified to fix the Dell systems as well. About halfway through his tenure at the school, he joined the staff of the School of Art’s website where he helped to rearchitect the backend server and database and continued the development of the ColdFusion application which powered the site.`,
  `After graduation, John took his technical skills and passion for Apple products to a brand new Apple Store in Akron, OH. There, he worked as a Genius for three and a half years at which time he found that he really missed programming and his job left him with little time or energy for it. So, he found a position at Davey Resource Group, a subsidiary of the  Davey Tree Expert Company. They needed a new developer and John just happened to know the primary language of their now legacy software: ColdFusion.`,
  `In his time at DRG, John has developed the primary RESTful web API used by their field data-collection software and he has helped to build their new “flagship” applications, TreeKeeper8/myRowKeeper, and ResourceKeeper. He has found that he really enjoys building the web APIs used by these applications, especially the newer ones which are being developed for Nodejs with Express.`,
  `In his free time, John plays video games and watches TV shows and movies (he has a very large movie collection) and he reads books, mostly in the sci-fi and fantasy genres.`];
  constructor() { }

  ngOnInit(): void {
  }

}
