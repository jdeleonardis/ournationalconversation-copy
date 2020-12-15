import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/writerDashboard.css';
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import ArticleCategoryRadioButtons from '../components/WriterDashboard/ArticleCategoryRadioButtons'
import NewsTopicRadioButtons from '../components/WriterDashboard/NewsTopicRadioButtons'
import PolicyTopicRadioButtons from '../components/WriterDashboard/PolicyTopicRadioButtons'
import KeywordTags from '../components/WriterDashboard/KeywordTags'
import WriterDashboardSubmitButtons from '../components/WriterDashboard/WriterDashboardSubmitButtons'
import WriterDashboardHeader from '../components/WriterDashboard/WriterDashboardHeader'

export class WriterDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      articleSummary: '',
      editorText: '',
      articleCategory: '',
      newsTopic: '',
      otherNewsTopic: '',
      policyTopic: '',
      otherPolicyTopic: '',
      newTag: '',
      tagList: [],
      validationError: false,
      validationIssue: [],
      wordCount: 0
    };
  }
  changeHandler = (event) => {    
    if (event.target.value === 'Opinion') {      
      this.setState({articleCategory: 'Opinion', policyTopic: '', otherPolicyTopic: '', validationError: false, validationIssue: []});  
    }
    else if (event.target.value === 'Solution') {
      this.setState({articleCategory: 'Solution', newsTopic: '', otherNewsTopic: '', validationError: false, validationIssue: []});  
    }
    else {
      this.setState({[event.target.name]: event.target.value});
    }    
  }

  sunEditorChangeHandler = (event) => {
    let wordCount = this.editorWordCount(event)
    this.setState({editorText: event, wordCount: wordCount});
  }

  editorWordCount = (data) => {
    data = data.replace(/<[^>]*>/g," ");
    data = data.replace(/\s+/g, ' ');
    data = data.trim();
    let wordCount = data.split(" ").length
    return wordCount
  }

  validation = () => {
    let validationError = false
    let validationIssue = []
    if (this.state.headline === '') {      
      validationIssue.push('headline')
      validationError = true
    }

    if (this.state.articleSummary === '') {
      validationIssue.push('articlesummary')      
      validationError = true
    }

    if (this.state.editorText === '') {
      validationIssue.push('article')      
      validationError = true
    }    

    if (this.state.articleCategory === '') {
      validationIssue.push('articlecategory')      
      validationError = true
    }     
    
    if (this.state.articleCategory === 'Opinion' && this.state.newsTopic === '') {
      validationIssue.push('newstopic')      
      validationError = true
    }    

    if (this.state.articleCategory === 'Opinion' && this.state.newsTopic === 'Other' && this.state.otherNewsTopic === '') {
      validationIssue.push('othernewstopic')      
      validationError = true
    }    

    if (this.state.articleCategory === 'Solution' && this.state.policyTopic === '') {
      validationIssue.push('policytopic')      
      validationError = true
    }    

    if (this.state.articleCategory === 'Solution' && this.state.policyTopic === 'Other' && this.state.otherPolicyTopic === '') {
      validationIssue.push('otherpolicytopic')      
      validationError = true
    }    

    if (validationError) {
      this.setState({validationError: true, validationIssue: validationIssue})
    }
    else
    {
      this.setState({validationError: false, validationIssue: []})
    }    
    return validationError
  }

  validateNewTag = () => {
    let validationError = false
    let validationIssue = []
    if (this.state.newTag === '') {      
      validationIssue.push('tag')
      validationError = true
    }

    if (validationError) {
      this.setState({validationError: true, validationIssue: validationIssue})
    }
    else
    {
      this.setState({validationError: false, validationIssue: []})
    }    
    return validationError
  }  

  submitArticle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("validation error: " + this.validation())
    console.log(this.state)
  }

  saveDraft = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert('draft')
    console.log(this.state)
  }  

  addTag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.validateNewTag()) {
      this.setState(prevState => ({ tagList: [...this.state.tagList, this.state.newTag], newTag: ''}));
    }
  }

  removeTag = (value,e) => {
    e.preventDefault();
    e.stopPropagation();    
    this.setState({tagList: this.state.tagList.filter(function(tag) { 
      return tag !== value 
    })});
  }
  
  render() {

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Writer Dashboard</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col>
                <div>
                  <Card id='writers-dashboard-card'>                      
                    <Card.Body>
                      <WriterDashboardHeader />
                      <br />
                      <Form onSubmit={this.submitArticle}>  
                        <Form.Group controlId='formBasicHeadline'>
                          <Form.Label style={{fontSize: 'small', color: '#808182'}}>HEADLINE</Form.Label>
                          <Form.Control 
                            type='text'
                            style={{fontWeight: 'bold'}}
                            name='headline'
                            value={this.state.headline}
                            onChange={this.changeHandler}
                            required />
                            <div className={this.state.validationError && this.state.validationIssue.indexOf('headline') >= 0 ? '' : 'height0 invisible'}>
                              <Form.Label style={{fontSize: 'small', color: 'red'}}>Please enter a headline.</Form.Label>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='formBasicArticleSummary'>
                          <Form.Label style={{fontSize: 'small', color: '#808182'}}>ARTICLE SUMMARY</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows='4'
                            style={{resize: 'none'}}
                            name='articleSummary'
                            value={this.state.articleSummary}
                            onChange={this.changeHandler}
                            required />
                            <div className={this.state.validationError && this.state.validationIssue.indexOf('articlesummary') >= 0 ? '' : 'height0 invisible'}>
                              <Form.Label style={{fontSize: 'small', color: 'red'}}>Please enter an article summary.</Form.Label>
                            </div>
                        </Form.Group>
                        <Form.Group controlId='ckeditor'>
                          <Form.Label style={{fontSize: 'small', color: '#808182'}}>ARTICLE</Form.Label>
                          <SunEditor 
                            setOptions={{
                              height: 300,
                              buttonList: [
                                ['undo', 'redo'],
                                ['font', 'fontSize', 'formatBlock'],
                                ['paragraphStyle', 'blockquote'],
                                ['fontColor', 'hiliteColor', 'textStyle'],
                                ['removeFormat'],
                                '/', // Line break
                                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                ['outdent', 'indent'],
                                ['align', 'horizontalRule', 'list', 'lineHeight'],
                                ['table', 'link', 'image', 'video'],                                
                                ['fullScreen', 'showBlocks', 'codeView'],
                                ['preview', 'print']
                            ]
                            }}
                            onChange={this.sunEditorChangeHandler} 
                          />
                          <div className={this.state.validationError && this.state.validationIssue.indexOf('article') >= 0 ? '' : 'height0 invisible'}>
                            <Form.Label style={{fontSize: 'small', color: 'red'}}>Please enter an article.</Form.Label>
                          </div>                            
                          <div className="rightAlign" style={{fontSize: 'small'}}>
                            {this.state.wordCount}/1000 words
                          </div>
                          <div className="rightAlign" style={{fontSize: 'small'}}>
                            MAY NOT NEED!! PREVIEW IN RTE<i id='fa-draft' className='fa fa-edit'></i><a href="Preview Draft"><u>Preview Draft</u></a>
                          </div>
                        </Form.Group>
                        <Form.Group controlId='articleCategories'>
                          <ArticleCategoryRadioButtons 
                            state={this.state}
                            changeHandler={this.changeHandler}/>
                        </Form.Group>
                        <Form.Group controlId='newsTopics'>                          
                          <NewsTopicRadioButtons                             
                            articleCategory={this.state.articleCategory}
                            active={this.state.newsTopic}
                            validationError={this.state.validationError}
                            validationIssue={this.state.validationIssue}
                            changeHandler={this.changeHandler}/>                           
                        </Form.Group>   
                        <Form.Group controlId='policyTopics'>
                          <PolicyTopicRadioButtons
                            articleCategory={this.state.articleCategory} 
                            active={this.state.policyTopic}
                            validationError={this.state.validationError}
                            validationIssue={this.state.validationIssue}
                            changeHandler={this.changeHandler}/>                           
                        </Form.Group>  
                        <Form.Group controlId='keywordTags'>
                          <KeywordTags                             
                            addTag={this.addTag}
                            removeTag={this.removeTag}
                            changeHandler={this.changeHandler}
                            state={this.state}/>
                        </Form.Group>   
                        <WriterDashboardSubmitButtons 
                          saveDraft={this.saveDraft}
                          submitArticle={this.submitArticle}/>                                            
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default WriterDashboard;



