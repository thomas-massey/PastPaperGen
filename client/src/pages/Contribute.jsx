import React, { useState } from 'react'
import axios from 'axios'
import "./Contribute.css"

function Contribute() {
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', e.target.file.files[0]);
    axios.post('http://127.0.0.1:5000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const handleGenerateSubmit = (e) => {
    e.preventDefault();
    const formData2 = new FormData();
    formData2.append('number_of_questions', e.target.number_of_questions.value);

    const getSelectedCheckboxes = (name) => {
      const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
      return JSON.stringify(Array.from(checkboxes).map((checkbox) => checkbox.value));
    };

    formData2.append('paper_types', getSelectedCheckboxes('paper_type'));
    formData2.append('topics', getSelectedCheckboxes('topics'));

    axios.post('http://127.0.0.1:5000/api/maths/create_paper', formData2, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  return (
    <div>
      <h1>Uploads</h1>
      <form onSubmit={handleUploadSubmit}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
      <h1>Generate</h1>
      <form onSubmit={e => {handleGenerateSubmit(e)}}>
        <input type="number" name="number_of_questions" /> Number of Questions <br /><br />
        <div class="checkbox-wrapper">
          <label class="checkbox">
            <input class="checkbox__trigger visuallyhidden" type="checkbox" name="paper_type" value="AS" />
              <span class="checkbox__symbol">
                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
            <p class="checkbox__textwrapper">AS</p>
          </label>
          <label class="checkbox">
            <input class="checkbox__trigger visuallyhidden" type="checkbox" name="paper_type" value="A" />
              <span class="checkbox__symbol">
                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
            <p class="checkbox__textwrapper">A</p>
          </label>
          <label class="checkbox">
            <input class="checkbox__trigger visuallyhidden" type="checkbox" name="paper_type" value="MEI" />
              <span class="checkbox__symbol">
                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 14l8 7L24 7"></path>
                </svg>
              </span>
            <p class="checkbox__textwrapper">MEI</p>
          </label>
        </div>

        <h2>Topics</h2>
        <div class="topics_selection">
          <div class="checkbox-wrapper">
            <h3>Proof</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Proof" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Proof</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Proof by Contradiction" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Proof by Contradiction</p>
            </label>
            <h3>Algebra and Functions</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Laws of Indices and Surds" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Laws of Indices and Surds</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Polynomials" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Polynomials</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Algebraic Division" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Algebraic Division</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Partial Fractions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Partial Fractions</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Solving Simultaneous Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Solving Simultaneous Equations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Solving Quadratic Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Solving Quadratic Equations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Quadratic Functions and Graphs" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Quadratic Functions and Graphs</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="The Quadratic Formula" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">The Quadratic Formula</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Simultaneous Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Simultaneous Equations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Inequalities" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Inequalities</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Cubics" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Cubics</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Modulus" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Modulus</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Graph of Functions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Graph of Functions</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Proportions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Proportions</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Composite and Inverse Functions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Composite and Inverse Functions</p>
            </label>
            <h3>Coordinate Geometry</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Linear Coordinate Geometry" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Linear Coordinate Geometry</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Circle Geometry" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Circle Geometry</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Parametric Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Parametric Equations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="More on Parametric Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">More on Parametric Equations</p>
            </label>
            <h3>Sequences and Series</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Sequences" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Sequences</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Arithmetic Series" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Arithmetic Series</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Geometric Series" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Geometric Series</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Binoomial Expansions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Binoomial Expansions</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Binomial Expansions as Infinite Sums" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Binomial Expansions as Infinite Sums</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Further Binomial Expansions" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Further Binomial Expansions</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Spot the Mistakes 1" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Spot the Mistakes 1</p>
            </label>
            <h3>Trigonometry</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Angles, Arc Length and Sector Area" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Angles, Arc Length and Sector Area</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Trig Formulas and Identities" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Trig Formulas and Identities</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Trig Graphs" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Trig Graphs</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Solving Trig Equations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Solving Trig Equations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Further Trig" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Further Trig</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Further Trig Identities and Approximations" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Further Trig Identities and Approximations</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Addition and Double Angle Formulas" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Addition and Double Angle Formulas</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="The R Addition Formulas" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">The R Addition Formulas</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Trig Proofs" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Trig Proofs</p>
            </label>
            <h3>Exponentials and Logarithms</h3>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Exponentials and Logs" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Exponentials and Logs</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Using Exponentials and Logs" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Using Exponentials and Logs</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="e^2 and ln(x)" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">eˣ and ln(x)</p>
            </label>
            <label class="checkbox">
              <input class="checkbox__trigger visuallyhidden" type="checkbox" name="topics" value="Spot the Mistake 2" />
                <span class="checkbox__symbol">
                  <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14l8 7L24 7"></path>
                  </svg>
                </span>
              <p class="checkbox__textwrapper">Spot the Mistake 2</p>
            </label>
          </div>
        </div>
        <br />
        <button>
          <span>Generate</span>
        </button>
      </form>
      <h1>Downloads</h1>
      <button type="button" onClick={() => {
        axios.get('http://127.0.0.1:5000/api/maths/download_paper', {
          responseType: 'blob'
        }).then(res => {
          const url = window.URL.createObjectURL(new Blob([res.data]))
          const link = document.createElement('a')
        })
      }}>
        <span>Download</span>
      </button>
    </div>
  )
}

function CheckboxSection(){
  const sections = [
    {
      title: "Paper Types",
      name: "paper_types",
      options: [
        { value: "AS", label: "AS" },
        { value: "A Level", label: "A Level" },
        { value: "MEI", label: "MEI" }
      ]
    },
    {
      title: "Topics",
      name: "topics",
      categories: [
        {
          title: "Algebra",
          options: [
            "Algebra",
            "Linear Equations",
            "Quadratic Equations",
            "Simultaneous Equations"
          ]
        },
        {
          title: "Trigonometry",
          options: [
            "Trigonometry",
            "The R Addition Formulas",
            "Trig Proofs"
          ]
        }
      ]
    }
  ]
  return (
    <div key={section.title}>
      {/* Iterate though the array, each index is an object with its own title and subtopics */}
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          {/* If the section has categories, iterate through each category */}
          {section.categories ? (
            section.categories.map((category, index) => (
              <div key={index}>
                <h4>{category.title}</h4>
                {category.options.map((option, index) => (
                  <Checkbox key={index} name={section.name} value={option} label={option} />
                ))}
              </div>
            ))
          ) : (
            // If the section doesn't have categories, just iterate through the options
            section.options.map((option, index) => (
              <Checkbox key={index} name={section.name} value={option.value} label={option.label} />
            ))
          )}
        </div>
      ))}
    </div>

  )
}

function Checkbox({ name, value, label }) {
  return (
    <label className="checkbox">
      <input className="checkbox__trigger visuallyhidden" type="checkbox" name={name} value={value} />
      <span className="checkbox__symbol">
        <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 14l8 7L24 7"></path>
        </svg>
      </span>
      <p className="checkbox__textwrapper">{label}</p>
    </label>
  )
}

export default Contribute